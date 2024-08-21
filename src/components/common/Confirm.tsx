import { UserData } from '@/src/models/user.model';
import { useAppDispatch } from '@/src/store/store';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  Typography,
} from '@mui/material';
import React from 'react';
import { deleteUser } from '@/src/store/slices/userSlice';

interface Props {
  open: boolean;
  onClose: () => void;
  user: UserData | null;
}

const Confirm = ({ open, onClose, user }: Props) => {
  const dispatch = useAppDispatch();
  const deleteUsers = async (user: UserData) => {
    const res = await dispatch(deleteUser(user));
    if (res.meta.requestStatus === 'fulfilled') {
      onClose();
    }
  };
  return (
    <React.Fragment>
      <Dialog open={open}>
        <Card>
          <CardContent className="p-8">
            <Typography gutterBottom variant="h3">
              Delete User
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              className="mr-2"
              onClick={() => deleteUsers(user!)}
            >
              Yes
            </Button>
            <Button fullWidth variant="outlined" onClick={onClose}>
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Dialog>
    </React.Fragment>
  );
};

export default Confirm;
