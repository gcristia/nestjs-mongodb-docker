import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { IHttpAdapter } from './interfaces/http-adapter.interface'

@Injectable()
export class AxiosAdapter implements IHttpAdapter {
    private readonly axios: AxiosInstance = axios
    async get<T>(url: string): Promise<T> {
        try {
            const { data } = await this.axios.get<T>(url)
            return data
        } catch (e) {
            throw new Error(e.message)
        }
    }
}
