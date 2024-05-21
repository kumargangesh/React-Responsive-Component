import React, { useState } from 'react'
import InputTagWithBorderName from './InputTagWithBorderName';

export default function FrontPage() {

  const [name, setName] = useState("");

  return (
    <div>
      <InputTagWithBorderName
        labelText="Crypt Name"
        inputType="text"
        placeholder="Crypto Name"
        inputValue={name}
        setInputValueMethod={setName}
        forMobileScreen={
          [
            {
              labelStyle: {
                top: "",
                left: ""
              }
            },
            {
              inputBoxStyle: {
                width: "",
                margin: ""
              }
            }
          ]
        }
        forTabletScreen={
          [
            {
              labelStyle: {
                top: "",
                left: ""
              }
            },
            {
              inputBoxStyle: {
                width: "",
                margin: ""
              }
            }
          ]
        }
        forLaptopScreen={
          [
            {
              labelStyle: {
                top: "",
                left: ""
              }
            },
            {
              inputBoxStyle: {
                width: "",
                margin: ""
              }
            }
          ]
        }
      />

    </div>
  )
}
