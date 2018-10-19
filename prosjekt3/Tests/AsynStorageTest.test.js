import React from 'react';
import Goals from '../components/Goals.js'

//Mockup of motivational Goals
const mockGoals = {
  goalOne: 'vanne huset',
  goalTwo: 'ringe hunder',
  goalThree: 'lufte bestemor',
};

jest.mock('react-native', () => ({
  AsyncStorage: {
    setItem: jest.fn((key, value) => new Promise((resolve) => {
      mockGoals[key] = value;
      resolve(value);
    })),
    getItem: jest.fn(key => new Prommise((resolve) => {
      resolve(mockGoals[key]);
    })),
  },
}));

const AsyncStorage = require('react-native');
