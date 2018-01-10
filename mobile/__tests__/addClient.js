"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import CounterButton from '../components/mobile-company';

test('add client', () => {
    const component = renderer.create(
        <MobileClient 
            key={1} 
            id={1}
            fio='Grey M.'
            status='Active'
            balance={250}
        />
    )

    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();

    //component.props.onClick();



});