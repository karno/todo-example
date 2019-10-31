import * as React from 'react';
import { useState } from 'react';

type Props = {
    onSubmit: (text: string) => void;
};

type State = {
    value: string;
}

const Component: React.FC<Props> = props => {
    const [state, setState] = useState({ value: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setState({
            value: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const text = state.value.trim();
        if (text === '') {
            return;
        }
        props.onSubmit(text);
        setState({ value: '' });
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    value={state.value}
                />
                <button type={'submit'}>
                    Add Todo
                    </button>
            </form>
        </div >
    );
}

export default Component;