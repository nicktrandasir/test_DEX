

export interface ILogin {
    isAuth: any,
    name: string | null,
    error: null | string,
    isFetching: boolean,
    token: string | null,
    avatarUrl: string | null

}
export interface IAuthorization {
    name: string
    avatarUrl: string
    token: string
}