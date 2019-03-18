import React, { Component } from "react";
import Select from "react-select";
import { ValueType } from "react-select/lib/types";

class FormEntity extends Component {
    state = {
        images: ["belmont.bmp", "contra.bmp", "ninja.bmp"],
        selectedOption: null
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }

    render() {
        const { selectedOption, images } = this.state;

        return (
            <div>
                <h4>Elige</h4>
                <Select
                    name="Select-Entities"
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={images}
                    menuRenderer={({
                        options,
                        selectValue
                    }) => {
                        return (
                            <>
                                {options.map((image) => {

                                    return (
                                        <div onClick={() => {
                                            selectValue(image)
                                        }}>
                                            <img src={`/src/assets/${image}`}></img>
                                        </div>
                                    )

                                })}
                            </>
                        )


                    }}
                />
            </div>
        );
    }
}

export { FormEntity };