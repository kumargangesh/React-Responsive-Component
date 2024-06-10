import React, { useEffect } from 'react';
import "./InputTagWithBorderName.css";
import Radium, { StyleRoot } from 'radium';

export default function InputTagWithBorderName(props) {

    const inputHandler = (event) => {
        props.setInputValueMethod(event.target.value);
    }

    const LableStyle = {

        position: 'absolute',
        zIndex: '1',
        backgroundColor: 'rgb(12, 25, 37)',
        padding: '0 5px',
        color: '#bfa181',
        display: props.inputValue === "" ? "none" : "initial",
        readOnly : props.readOnly,

        '@media(min-width: 300px)': {
            fontSize: '13px',
            top: props.forMobileScreen[0].labelStyle.top === "" ? "10%" : props.forMobileScreen[0].labelStyle.top,
            left: props.forMobileScreen[0].labelStyle.left === "" ? "6.5%" : props.forMobileScreen[0].labelStyle.left
        },
        '@media(min-width: 650px)': {
            fontSize: '13px',
            top: props.forTabletScreen[0].labelStyle.top === "" ? "17.5%" : props.forTabletScreen[0].labelStyle.top,
            left: props.forTabletScreen[0].labelStyle.left === "" ? "8%" : props.forTabletScreen[0].labelStyle.left
        },
        '@media(min-width: 900px)': {
            fontSize: '14px',
            top: props.forLaptopScreen[0].labelStyle.top === "" ? "22.5%" : props.forLaptopScreen[0].labelStyle.top,
            left: props.forLaptopScreen[0].labelStyle.left === "" ? "12%" : props.forLaptopScreen[0].labelStyle.left
        }
    };

    const InputBoxStyle = {

        border: "1px solid yellow",
        borderRadius: "6px",
        position: "relative",
        lineHeight: "6ex",
        backgroundColor: "rgb(12, 25, 37)",
        color: "#bfa181",
        padding: "1% 2.5%",
        fontSize: "19px",
        width: "80%",
        height: "60px",

        '@media(min-width: 300px)': {
            padding: "2% 5%",
            width: props.forMobileScreen[1].inputBoxStyle.width === "" ? "94%" : props.forMobileScreen[1].inputBoxStyle.width,
            margin: props.forMobileScreen[1].inputBoxStyle.margin === "" ? "6% 3%" : props.forMobileScreen[1].inputBoxStyle.margin
        },
        '@media(min-width: 650px)': {
            padding: "2% 5%",
            width: props.forTabletScreen[1].inputBoxStyle.width === "" ? "90%" : props.forTabletScreen[1].inputBoxStyle.width,
            margin: props.forTabletScreen[1].inputBoxStyle.margin === "" ? "5%" : props.forTabletScreen[1].inputBoxStyle.margin
        },
        '@media(min-width: 900px)': {
            padding: "2%",
            width: props.forLaptopScreen[1].inputBoxStyle.width === "" ? "80%" : props.forLaptopScreen[1].inputBoxStyle.width,
            margin: props.forLaptopScreen[1].inputBoxStyle.margin === "" ? "3% 10%" : props.forLaptopScreen[1].inputBoxStyle.margin
        }
    };

    return (
        <StyleRoot>
            <div className="inputWithLabel">

                <label style={LableStyle}>
                    {props.labelText}
                </label>

                <input
                    type={props.inputType}
                    placeholder={props.placeholder}
                    value={props.inputValue}
                    onChange={inputHandler}
                    style={InputBoxStyle}
                />

            </div>
        </StyleRoot>
    )
}
