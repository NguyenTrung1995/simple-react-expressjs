import * as React from 'react';
import styled from 'styled-components';

const DropDownContainer = styled.div`
    display: inline-block;
    position: relative;
    font-family: Arial;

    select {
        display: none;
    }
`;

class DropDown extends React.Component {
    render() {
        const cars = ["Audi","BMW","Citroen","Ford","Honda","Jaguar","Land Rover","Mercedes","Mini","Nissan","Toyota","Volvo"];
        return (
            <DropDownContainer className="custom-select">
                <select>
                    <option value="0">Select car:</option>
                    {
                        cars.map((car, index) => {
                            return <option value={index + 1} key={index}>{car}</option>
                        })
                    }
                </select>
            </DropDownContainer>
        );
    }
}

export default DropDown;