import React, { cloneElement } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { NavigationType, Location } from 'react-router-dom';
import './index.less';

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back',
  REPLACE: 'replace',
};

type IRouterTransitionProps = {
  action: NavigationType;
  children?: React.ReactNode;
  location: Location;
};

export default ({ children, action, location }: IRouterTransitionProps) => (
  <TransitionGroup
    className="router-wrapper"
    childFactory={(child: React.ReactElement) =>
      cloneElement(child, {
        classNames: ANIMATION_MAP[action],
      })
    }
  >
    <CSSTransition key={location.pathname} timeout={500}>
      {children}
    </CSSTransition>
  </TransitionGroup>
);
