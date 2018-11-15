import { fileConstants } from '../_constants';

export const fileActions = {
  updateFile
}

const updateFile = (fileID) => ({ type: fileConstants.FILE_REQUEST, payload: { fileID } });