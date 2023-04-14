import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http.adapter.interce";

@Injectable()
export class AxiosAdapter implements HttpAdapter {
    //dependencia del servicio
    private readonly axios: AxiosInstance = axios;

    async get<T>(url: string): Promise<T> {
        try {
            const { data } = await this.axios.get<T>(url);
            return data;

        } catch (error) {
            throw new Error("Method with error - Check logs.");
        }

    }
}