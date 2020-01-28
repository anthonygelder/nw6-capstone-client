import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow( < Footer / > );
});