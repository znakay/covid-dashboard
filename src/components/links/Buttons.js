import React from 'react'
import ContainerBtnMap from '../../containers/ContainerBtnMap'
import { DataTypes } from './../../actions'

export default function Buttons() {
    return (
    <div>
        <ContainerBtnMap typeData={DataTypes.TOTAL_CONFIRMED}>Total cases</ContainerBtnMap>
        <ContainerBtnMap typeData={DataTypes.TOTAL_DEATH}>Total deaths</ContainerBtnMap>
        <ContainerBtnMap typeData={DataTypes.TOTAL_RECOVERED}>Total recovered</ContainerBtnMap>
        <ContainerBtnMap typeData={DataTypes.NEW_CONFIRMED}>Cases (last day)</ContainerBtnMap>
        <ContainerBtnMap typeData={DataTypes.NEW_DEATH}>Deaths (last day)</ContainerBtnMap>
        <ContainerBtnMap typeData={DataTypes.NEW_RECOVERED}>Recovered (Last day)</ContainerBtnMap>
        <ContainerBtnMap typeData={DataTypes.TOTAL_POPULATION_COUNFIRM}>Total cases (100th population)</ContainerBtnMap>
        <ContainerBtnMap typeData={DataTypes.TOTAL_POPULATION_DEATH}>Total deaths (100th population)</ContainerBtnMap>
        <ContainerBtnMap typeData={DataTypes.TOTAL_POPULATION_RECOVERED}>Total recovered (100th population)</ContainerBtnMap>
        <ContainerBtnMap typeData={DataTypes.NEW_POPULATION_CONFIRMED}>Cases (100th population/last day)</ContainerBtnMap>
        <ContainerBtnMap typeData={DataTypes.NEW_POPULATION_DEATH}>Deaths (100th population/last day)</ContainerBtnMap>
        <ContainerBtnMap typeData={DataTypes.NEW_POPULATION_RECOVERED}>Recovered (100th population/last day)</ContainerBtnMap>
    </div>
    )
}