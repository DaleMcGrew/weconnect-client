import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@mui/styles';
import AddPersonDrawer from './AddPersonDrawer';
import EditQuestionnaireDrawer from './EditQuestionnaireDrawer';
import AddTeamDrawer from './AddTeamDrawer';
import EditPersonDrawer from './EditPersonDrawer';
import EditQuestionDrawer from './EditQuestionDrawer';
import PersonProfileDrawer from './PersonProfileDrawer';
import { renderLog } from '../../common/utils/logging';


const Drawers = () => {  //  classes, teamId
  renderLog('Drawers');  // Set LOG_RENDER_EVENTS to log all renders

  return (
    <DrawersWrapper>
      <PersonProfileDrawer />
      <AddPersonDrawer />
      <AddTeamDrawer />
      <EditPersonDrawer />
      <EditQuestionDrawer />
      <EditQuestionnaireDrawer />
    </DrawersWrapper>
  );
};

const styles = () => ({
});

const DrawersWrapper = styled('div')`
`;

export default withStyles(styles)(Drawers);
