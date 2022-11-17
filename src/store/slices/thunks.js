import { restablecerPlayers, restablecerPlayersSuplentes, setPlayers, setSuplentes, setTitulares } from "./playerSlice"


    export const getPlayerTitular = ( player, totalPlayers ) => {
        return async( dispatch, getState) => {

            const nuevoArrya = totalPlayers.filter( ( playerIndividual) => playerIndividual.id !== player.id )

            dispatch(setPlayers({ totalPlayers: nuevoArrya }) )
            dispatch(setTitulares({ totalTitulares: player }) )
        }
    }

    export const getPlayerSuplente = ( player, totalPlayers ) => {
        return async( dispatch, getState) => {

            const nuevoArrya = totalPlayers.filter( ( playerIndividual) => playerIndividual.id !== player.id )

            dispatch(setPlayers({ totalPlayers: nuevoArrya }) )
            dispatch(setSuplentes({ totalSuplentes: player }) )
        }
    }

    export const backPlayerTitular = ( player, totalTitulares  ) => {
        return async( dispatch, getState) => {

            const nuevoArrayTitulares = totalTitulares.filter( ( playerIndividual) => playerIndividual.id !== player.id )

            dispatch(restablecerPlayers({ totalTitulares: nuevoArrayTitulares, totalPlayers: player }) )
        }
    }

    export const backPlayerSuplente = ( player, totalSuplentes  ) => {
        return async( dispatch, getState) => {

            const nuevoArraySuplentes = totalSuplentes.filter( ( playerIndividual) => playerIndividual.id !== player.id )

            dispatch(restablecerPlayersSuplentes({ totalSuplentes: nuevoArraySuplentes, totalPlayers: player }) )
        }
    }