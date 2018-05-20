import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/react";

import "../static/fontawesome-all";
import "../static/bulma.min.css";

import Name from "../src/components/name";

storiesOf('Name', module)
    .addDecorator(withKnobs)
    .add('Normal', () => (
            <div>
                <Name name={text('Label', 'Label1')} disabled={boolean('Disabled', false)} onClick={action('button-click')} />
            </div>
        ));