import React from "react";

export interface TestProps{
    yourName: string;
}

export function Testcomponent({yourName} : TestProps) {
    return (
        <div>
            Hello, {yourName}! This is a new test component!!
        </div>
    )
}