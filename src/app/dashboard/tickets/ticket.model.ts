export type Ticket = {
    request: string,
    id: string,
    title: string,
    status: 'open' | 'closed',
}