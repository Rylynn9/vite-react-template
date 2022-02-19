import { combineProviders } from 'react-combine-provider';
import homeState from './home';

export default combineProviders([homeState.Provider]);
