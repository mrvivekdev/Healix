export type CorsType = {
    origin: string[];
    methods: string[];
    credentials: boolean;
}

export type PayloadType = {
    status: 'success' | 'error' | 'pending' | "missing";
    error?: string;
    message: string;
    user?: any;
    cookie?: any;
    token?: any;
    data?: string | object | any;
    transport?: string;
    result?: any;
}