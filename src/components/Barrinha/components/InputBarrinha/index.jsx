import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../../services/api"
import { Container, InputB, } from "./styles"

export function InputBarrinha({ setValor, valor, valorMax, right = false, ...rest }) {

    function onlyNumbers(v) {
        if (v > valorMax) {
            setValor(valor)
        } else {
            v = v.replace(/[^0-9]/g, "")
            setValor(Number(v))
        }
    }

    return (
        <Container>
            <InputB autoComplete="off" right={right} value={valor != null ? valor : 0} type="number" maxLength={3} {...rest}
                onChange={(event) => {
                    onlyNumbers(event.target.value)
                }}
            />
        </Container>
    )
}