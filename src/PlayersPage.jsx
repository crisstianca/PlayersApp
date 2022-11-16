import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { backPlayerSuplente, backPlayerTitular, getPlayerSuplente, getPlayerTitular } from './store/slices/thunks'

export const PlayersPage = () => {
    
    const dispatch = useDispatch()
    const { totalPlayers, totalTitulares, totalSuplentes } =  useSelector( state => state.players)    

    return (
        <>
            <div className='title'>
                <h1>  Alineacion PSG </h1>
            </div>

            {/* <button className='btn btn-primary' onClick={ () => { } }> Resetear </button> */}
        <div className='row'>

            <div className='col container-images'>
                <div> <h2> <b> Lista de Jugadores </b>  </h2></div>
                <hr />
                { 
                    totalPlayers.map( (player, index ) => { 
                        return <div className='images'>
                            <h3> {player.name} </h3>
                            <img src={ player.img } alt={player.name } /> 
                            <div className='container-buttons'>
                                <button onClick={ () => dispatch(getPlayerTitular( player, totalPlayers ))} className='btn btn-primary'> Titular </button>
                                <button onClick={ () => dispatch(getPlayerSuplente( player, totalPlayers )) } className='btn btn-danger'> Suplente </button>
                            </div>
                        </div>   
                    })                 
                } 
            </div>    

            <div className='col container-titulares'>
                <div className='container-titularesInfo'>
                <div> <h2> <b> Titulares </b> </h2></div>
                <hr />
                    { 
                        totalTitulares.map( titular => {
                            return <div className='images'>
                            <h3> {titular.name} </h3>
                            <img src={ titular.img } alt={titular.name } /> 
                            <div className='containerButtonQuitar'>
                                <button onClick={ () => { dispatch(backPlayerTitular( titular, totalTitulares)) } } className='btn btn-danger'> X </button>
                            </div>
                        </div>   
                        })
                    }
                </div>
            </div> 
            <div className='col container-titulares'>
                <div className='container-suplentesInfo'>
                <h2> <b> Suplentes </b> </h2>
                <hr />
                    {
                        totalSuplentes.map( suplente => {
                            return <div className='images'>
                            <h3> {suplente.name} </h3>
                            <img src={ suplente.img } alt={suplente.name } /> 
                            <div className='containerButtonQuitar'>
                                <button onClick={ () => { dispatch(backPlayerSuplente( suplente, totalSuplentes ))} } className='btn btn-danger'> X </button>
                            </div>
                        </div>   
                        })  
                    }
                </div>
            </div> 
        </div>
        </>
    )
}
