import React from 'react';
import { Switch } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '50px',
    height: '24px',
    padding: '0px',
  },
  switchBase: {
    color: '#818181',
    padding: '1px',
    '&$checked': {
      '& + $track': {
        backgroundColor: '#23bf58',
      },
    },
  },
  thumb: {
    color: 'white',
    width: '20px',
    height: '20px',
    margin: '1px',
  },
  track: {
    borderRadius: '20px',
    backgroundColor: '#818181',
    opacity: '1 !important',
    '&:after, &:before': {
      color: 'white',
      fontSize: '11px',
      position: 'absolute',
      top: '6px',
    },
    '&:after': {
      content: "'On'",
      left: '8px',
    },
    '&:before': {
      content: "'Off'",
      right: '7px',
    },
  },
  checked: {
    color: '#23bf58 !important',
    transform: 'translateX(26px) !important',
  },
});

export const SwitchButton = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
};
