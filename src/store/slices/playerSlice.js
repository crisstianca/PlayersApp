import { createSlice } from '@reduxjs/toolkit';

export const playerSlice = createSlice({
    name: 'players',
    initialState: {
        totalPlayers: [
            {
                id: 1,
                name: ' Leonel Messi',
                img: 'src/img/messi.png'
            },
            {
                id: 2,
                name: 'Neymar',
                img: 'src/img/neymar.jpg'
            },
            {
                id: 3,
                name: 'Mbape',
                img: 'src/img/mbape.jpg'
            },
            {
                id: 4,
                name: 'Sergio Ramos',
                img: 'src/img/ramos.jpg'
            },
            {
                id: 5,
                name: 'Angel Di Maria',
                img: 'src/img/maria.webp'
            }
        ],
        totalTitulares: [],
        totalSuplentes: [],
    },
    reducers: {
        setPlayers: (state , action ) => {
            // console.log('AACTION: ', state.totalPlayers ) 
            // if ( action.payload.totalPlayers !== null) {
            //     state.totalPlayers = state.totalPlayers.filter( (player,index ) => player[index].id !== action.payload.totalPlayers.id ) 

            // }
            console.log('SLICES: ', action.payload )
            state.totalPlayers = action.payload.totalPlayers

        },
        setTitulares: (state = initialState, action ) => {
            state.totalTitulares = state.totalTitulares.concat(action.payload.totalTitulares)
        },
        setSuplentes: (state, action ) => {
            state.totalSuplentes = state.totalSuplentes.concat(action.payload.totalSuplentes)
        },
        restablecerPlayers: (state, action ) => {
            state.totalTitulares = action.payload.totalTitulares
            state.totalPlayers = state.totalPlayers.concat(action.payload.totalPlayers)
        },
        restablecerPlayersSuplentes: (state, action ) => {
            state.totalSuplentes = action.payload.totalSuplentes
            state.totalPlayers = state.totalPlayers.concat(action.payload.totalPlayers)
        },
    }
});


// Action creators are generated for each case reducer function
export const { setPlayers, setTitulares, setSuplentes, restablecerPlayers, restablecerPlayersSuplentes } = playerSlice.actions;