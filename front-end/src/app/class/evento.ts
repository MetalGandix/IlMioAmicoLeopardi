import { Immagine } from "./immagine"

export class Evento {
    id: number
    nomeEvento: string
    dataEvento: Date
    descrizione: string
    evento_immagine: Immagine
    retrievedImage: string
}
