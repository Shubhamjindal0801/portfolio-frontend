import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';

function DrawerBox() {

    const [open, setOpen] = useState(false);
    const listStyle3 = {
        background: '#fafa00',
        backgroundColor: 'red'
    }
    return (
        <div>
            <IconButton onClick={() => setOpen(true)} ><MenuRoundedIcon className='link' /></IconButton>
            <Drawer
                anchor={'right'}
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    sx: {
                        background:'var(--theme)',
                    }
                }}
            >
                <div className='drawer-div'>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/project">Projects</Link>
                    <Link className='link' to="/contact">Contact</Link>
                </div>
            </Drawer>
        </div>
    )
}

export default DrawerBox
