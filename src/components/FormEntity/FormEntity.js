import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Select from "react-select";
import "bulma";

import "./FormEntity.scss";
import { Input } from "../Input/Input";
import { validDecimals } from "../../utils";

const Table = ({ headers, children, ...props }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {headers.map(header => {
                        return (
                            <th key={header} title={header}>
                                {header}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
};

@inject("maps", "entities")
@observer
class FormEntity extends Component {
    state = {
        images: [
            "belmont.png",
            "contra.png",
            "ninja.png",
            "ballena.jpg",
            "serpiente.jpg"
        ],
        selectedOption: null,
        name: "",
        terrainCosts: {}
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };

    handleChangeName = ev => {
        const name = ev.target.value;
        this.setState({ name });
    };

    handleChangeTerrainCost = (idTerrain, cost) => {
        if (!validDecimals(cost) || cost < -1) {
            return;
        }
        this.setState(prevState => {
            return {
                terrainCosts: {
                    ...prevState.terrainCosts,
                    [idTerrain]: cost
                }
            };
        }, () => {
            console.log("costo: ", cost, this.state.terrainCosts);
        });
    };

    render() {
        const { selectedOption, images } = this.state;
        const { maps } = this.props;
        const keys = Object.keys(maps.textures);

        return (
            <div className="entity__container">
                <h4 className="entity__title font__zcool">ELIGE UN PERSONAJE</h4>
                <div className="entity__choosed">
                    <img
                        src={`${window.location.origin}/assets/${selectedOption}`}
                        alt={selectedOption}
                    />
                </div>
                <br />
                <div className="field select is-primary">
                    <Select
                        name="Select-Entities"
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={images}
                        menuRenderer={({ options, selectValue }) => {
                            return (
                                <div className="">
                                    {options.map((image, index) => {
                                        return (
                                            <div
                                                key={image}
                                                onClick={() => {
                                                    selectValue(image);
                                                }}
                                            >
                                                <img
                                                    className="entity__image"
                                                    alt={image}
                                                    src={`${window.location.origin}/assets/${image}`}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        }}
                    />
                </div>
                <Input
                    placeholder="Nombre"
                    label="Nombre"
                    onChange={this.handleChangeName}
                />
                <Table headers={["ID", "Nombre", "Color", "Costo"]}>
                    <>
                        {keys.map(key => {
                            const texture = maps.textures[key];
                            return (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>{texture.name}</td>
                                    <td>
                                        <div
                                            className="table__color-texture"
                                            style={{
                                                backgroundColor: texture.color,
                                                color: texture.color
                                            }}
                                        >
                                            _
                    </div>
                                    </td>
                                    <td>
                                        <Input
                                            type="number"
                                            onChange={ev =>
                                                this.handleChangeTerrainCost(key, ev.target.value)
                                            }
                                            min={0}
                                            step={"0.01"}
                                            value={this.state.terrainCosts[key]}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </>
                </Table>
            </div>
        );
    }
}

export { FormEntity };
