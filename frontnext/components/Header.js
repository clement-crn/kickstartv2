import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import "semantic-ui-css/semantic.min.css";
//Hosts the top level layout of our app
const Header = () => {
    const router = useRouter();
    return (
        <Menu style={{ marginTop: "1em" }}>
            <Menu.Item onClick={() => router.push("/")}>Kickstartv2</Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>Campagnes</Menu.Item>
                <Menu.Item onClick={() => router.push("/campaigns/new")}>
                    <Icon name="add circle" />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

export default Header;
