const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:5000' : 'https://google.com'

export const times = 'http://worldtimeapi.org/api/timezone/Europe/Dublin'