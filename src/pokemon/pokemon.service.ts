import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { isValidObjectId, Model } from 'mongoose'
import { CreatePokemonDto } from './dto/create-pokemon.dto'
import { UpdatePokemonDto } from './dto/update-pokemon.dto'
import { Pokemon } from './entities/pokemon.entity'
import { PaginationDto } from '../common/dto/pagination.dto'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class PokemonService {
    private defaultLimit: number
    private defaultOffset: number
    constructor(
        @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
        private readonly configService: ConfigService
    ) {
        this.defaultLimit = this.configService.get<number>('DEFAULT_LIMIT')
        this.defaultOffset = this.configService.get<number>('DEFAULT_OFFSET')
    }

    async create(createPokemonDto: CreatePokemonDto) {
        createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase()

        try {
            const pokemon = await this.pokemonModel.create(createPokemonDto)
            return pokemon
        } catch (error) {
            this.handleError(error)
        }
    }

    findAll(paginationDto: PaginationDto) {
        const { limit = this.defaultLimit, offset = this.defaultOffset } = paginationDto
        return this.pokemonModel.find().limit(limit).skip(offset).sort({ no: 1 }).select('-__v')
    }

    async findOne(id: string) {
        let pokemon: Pokemon

        //ID
        if (!isNaN(+id)) {
            pokemon = await this.pokemonModel.findOne({ no: id })
        }

        // MongoID
        if (!pokemon && isValidObjectId(id)) {
            pokemon = await this.pokemonModel.findById(id)
        }

        // Name
        if (!pokemon) {
            pokemon = await this.pokemonModel.findOne({ name: id.toLocaleLowerCase().trim() })
        }

        if (!pokemon) throw new NotFoundException(`Pokemon not found, ${id}`)

        return pokemon
    }

    async update(id: string, updatePokemonDto: UpdatePokemonDto) {
        const pokemon = await this.findOne(id)

        if (updatePokemonDto.name) {
            updatePokemonDto.name = updatePokemonDto.name.toLocaleLowerCase()
        }

        try {
            await pokemon.updateOne(updatePokemonDto)

            return { ...pokemon.toJSON(), ...updatePokemonDto }
        } catch (error) {
            this.handleError(error)
        }
    }

    async remove(id: string) {
        /*const pokemon = await this.findOne(id)
        pokemon.deleteOne()*/

        //const result = await this.pokemonModel.findByIdAndDelete(id)
        const { deletedCount } = await this.pokemonModel.deleteOne({ _id: id })

        if (!deletedCount) throw new NotFoundException(`Pokemon not found, ${id}`)

        return
    }

    private handleError(error: any) {
        if (error.code === 11000) {
            throw new BadRequestException(`Pokemon already exists, ${JSON.stringify(error.keyValue)}`)
        }

        console.error(error)

        throw new InternalServerErrorException(`Can't create pokemon, ${error.message}`)
    }
}
