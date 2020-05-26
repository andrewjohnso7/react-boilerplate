import { render } from 'react-testing-library';
import React from 'react';
import StringForm, { mapDispatchToProps } from '../index';
import { UPDATING_STRINGS } from '../../StringDisplay/constants';
/**
 *  There is only one reducer and constants file because the only state change
 *  that needs to render currently is on the StringDisplay component
 *  */

describe('StringForm component', () => {
  describe('<StringForm />', () => {
    it('should exist', () => {
      expect(StringForm).toBeDefined();
    });
    it('renders and matches the snapshot', () => {
      const { container } = render(<StringForm />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('UPDATING_STRINGS', () => {
    it('should return the correct constant', () => {
      expect(UPDATING_STRINGS).toEqual('UPDATING_STRINGS');
    });
  });

  describe('mapDispatchToProps', () => {
    it('should return the action creator for UPDATING_STRINGS', () => {
      const spy = jest.spyOn(mapDispatchToProps, 'addString');
      expect(spy).toBeDefined();
    });
  });
});
