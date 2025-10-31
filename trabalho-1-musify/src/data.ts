// src/data.ts
import type { PlaylistItem, CurrentTrack } from './types'; // Assumindo que você criou src/types.ts

// Dados para a Sidebar
export const menuItems: PlaylistItem[] = [
    { id: 101, nome: "Início", icone: "home" },
    { id: 102, nome: "Buscar", icone: "search" },
    { id: 103, nome: "Sua Biblioteca", icone: "books", isLibrary: true },
];

export const playlists: PlaylistItem[] = [
    { id: 1, nome: "Rock Clássico", icone: "list" },
    { id: 2, nome: "Foco Total", icone: "list" },
    { id: 3, nome: "Hits do Verão", icone: "list" },
];

// Dados para o Music Player
export const currentTrack: CurrentTrack = {
    titulo: "Nome da Música Incrível",
    artista: "Artista Fantástico",
    album: "O Melhor Álbum",
    capaUrl: "/foco.png",
};