import React, { Component } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Link from "next/link";

export default class MenuExampleBasic extends Component {
    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu>
                <Menu.Item
                    name="KickStarteur"
                    active={activeItem === "KickStarteur"}
                    onClick={this.handleItemClick}
                    Link="/"
                >
                    KICKSTARTEUR
                </Menu.Item>

                <Menu.Item
                    position="right"
                    name="campaigns"
                    active={activeItem === "campaigns"}
                    onClick={this.handleItemClick}
                >
                    Campagnes
                </Menu.Item>

                <Menu.Item
                    position="right"
                    name="+"
                    active={activeItem === "+"}
                    onClick={this.handleItemClick}
                >
                    +
                </Menu.Item>
            </Menu>
        );
    }
}
