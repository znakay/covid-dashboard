import React from 'react'
import ContainerBtnMap from '../../containers/ContainerBtnMap'
import { DataTypes } from './../../actions'

export default function Buttons() {
    return (
    <div>
        <ContainerBtnMap typeData={DataTypes.TOTAL_CONFIRMED}>Total</ContainerBtnMap>
        <ContainerBtnMap typeData={DataTypes.NEW_CONFIRMED}>Last Day</ContainerBtnMap>
        <ContainerBtnMap typeData={DataTypes.TOTAL_POPULATION_DEATH}>Total by population</ContainerBtnMap>
        <ContainerBtnMap typeData={DataTypes.NEW_POPULATION_CONFIRMED}>Last Day by population</ContainerBtnMap>
    </div>
    )
}