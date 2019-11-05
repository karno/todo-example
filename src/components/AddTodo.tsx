import * as React from 'react';
import { useState } from 'react';

export type DispatchProps = {
    onSubmit: (text: string) => void;
};

type Props = DispatchProps;

const Component: React.FC<Props> = props => {
    const [state, setState] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setState(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const text = state.trim();
        if (text === '') {
            return;
        }
        props.onSubmit(text);
        setState('');
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    value={state}
                />
                <button type={'submit'}>
                    Add Todo
                    </button>
            </form>
        </div >
    );
}

export default Component;