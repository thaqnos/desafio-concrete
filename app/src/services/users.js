import axios from 'axios'

const config = {
  baseURL: 'https://api.github.com/',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getUsers () {
  const url = 'https://api.github.com/users/{username}'
  return protocolo.get(url)
}

export function getRepository () {
    const url = 'https://api.github.com/users/{username}/repos'
    return protocolo.get(url)
  }

