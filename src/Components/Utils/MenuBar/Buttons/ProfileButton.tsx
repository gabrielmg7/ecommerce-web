/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LoginIcon from '@mui/icons-material/Login'
import { useThemeContext } from '../../../../Themes/ThemeProviderWrapper'

type ProfileButtonProps = {
    isLoggedIn: boolean | undefined
    onLoginClick?: () => void
    onProfileClick?: () => void
    themeMode: 'light' | 'dark'
    onThemeToggle?: () => void
}

const ProfileButton: React.FC<ProfileButtonProps> = ({
    isLoggedIn,
    onLoginClick,
    onProfileClick,
    themeMode,
    onThemeToggle,
}) => {
    const navigate = useNavigate()
    const { theme } = useThemeContext()

    const handleButtonClick = () => {
        if (isLoggedIn) {
            navigate('/cliente/perfil')
        } else {
            navigate('/unauthenticated/logar-usuario')
        }
    }

    return (
        <IconButton color="inherit" onClick={handleButtonClick}>
            {isLoggedIn ? (
                <AccountCircleIcon />
            ) : (
                <LoginIcon />
            )}
        </IconButton>
    )
}

export default ProfileButton
