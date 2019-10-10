import React from 'react'

export default function Objective({ row }) {
    return (
        <>
        <span>
            {"<"}
            <span>objective</span>
            {">"}
        </span>
            <br/>
            <span>
                {"<"}
                <span>id</span>
                {">"}
                {row[0]}
                {"</"}
                <span>id</span>
                {">"}
            </span>
            <br/>
            <span>
                {"<"}
                <span>name</span>
                {">"}
                {row[1]}
                {"</"}
                <span>name</span>
                {">"}
            </span>
            <br/>
        <span>
            {"</"}
            <span>objective</span>
            {">"}
        </span>
        <br/>
        </>
    )
}