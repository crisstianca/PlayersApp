import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { backPlayerSuplente, backPlayerTitular, getPlayerSuplente, getPlayerTitular } from './store/slices/thunks'

export const PlayersPage = () => {
    
    const dispatch = useDispatch()
    const { totalPlayers, totalTitulares, totalSuplentes } =  useSelector( state => state.players)    


    const onAddTitular = ( player ) => {
        dispatch(getPlayerTitular( player, totalPlayers ))
    }
    const onAddSuplente = ( player ) => {
        dispatch(getPlayerSuplente( player, totalPlayers ))
    }
    const onRemoveTitulares = ( titular ) => {
        dispatch(backPlayerTitular( titular, totalTitulares))
    }
    const onRemoveSuplentes = ( suplente ) => {
        dispatch(backPlayerSuplente( suplente, totalSuplentes ))
    }

    const renderPlayers = () => {
        return totalPlayers.map( (player, index ) => { 
            return <div className='images'>
                <h3> {player.name} </h3>
                <img src={ player.img } alt={player.name } /> 
                <div className='container-buttons'>
                    <button onClick={ () => onAddTitular( player )} className='btn btn-primary'> Titular </button>
                    <button onClick={ () => onAddSuplente( player ) } className='btn btn-danger'> Suplente </button>
                </div>
            </div>   
        })  
    }
    const renderTitulares = () => {
        return totalTitulares.map( titular => {
            return <div className='images'>
            <h3> {titular.name} </h3>
            <img src={ titular.img } alt={titular.name } /> 
            <div className='containerButtonQuitar'>
                <button onClick={ () => onRemoveTitulares( titular ) } className='btn btn-danger'> X </button>
            </div>
        </div>   
        })
    }
    const renderSuplentes = () => {
        return totalSuplentes.map( suplente => {
            return <div className='images'>
            <h3> {suplente.name} </h3>
            <img src={ suplente.img } alt={suplente.name } /> 
            <div className='containerButtonQuitar'>
                <button onClick={ () => onRemoveSuplentes( suplente ) } className='btn btn-danger'> X </button>
            </div>
        </div>   
        })  
    }
    
    return (
        <div className='container-fluid'>
            <div className='title'>
                <h1>  Alineacion PSG </h1>
            </div>

            <div className='row'>

                <div className='col text-center'>
                    <div> <h2> <b> Lista de Jugadores </b>  </h2></div>
                    <hr />
                    { renderPlayers() } 

                </div>    

                <div className='col text-center '>
                    <div className='container-titularesInfo'>
                    <div> <h2> <b> Titulares </b> </h2></div>
                    <hr />
                        { 
                            renderTitulares()
                        }
                    </div>
                </div> 
                <div className='col text-center'>
                    <div className='container-suplentesInfo'>
                    <h2> <b> Suplentes </b> </h2>
                    <hr />
                        {
                            renderSuplentes()
                        }
                    </div>
                </div> 
            </div>
        </div>
    )
}
