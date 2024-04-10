
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ICategoriaProduto } from '../../../types/restAPI/ICategoriaProduto';
import { getAllProductCategories } from '../../../services/fakeAPI/fakeApiProductService';
import { IProduct } from '../../../types/FakeAPI/type';

export default function ProductCategoryMenu() {
    const [categories, setCategories] = React.useState<IProduct[]>([]);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    // Suponho que você tenha uma função para carregar as categorias de produtos
    React.useEffect(() => {
        // Função para carregar as categorias de produtos
        // Exemplo de implementação fictícia
        const fetchCategories = async () => {
            try {

                const fetchedCategories = await getAllProductCategories();
                setCategories(fetchedCategories);
            } catch (error) {
                console.error('Erro ao carregar categorias de produtos:', error);
            }
        };

        fetchCategories();
    }, []); // Chamado apenas uma vez ao montar o componente

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="category-button"
                aria-controls={open ? 'category-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Categorias
                <KeyboardArrowDownIcon />
            </Button>
            <Menu
                id="category-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'category-button',
                }}
            >
                {categories.map((category, index) => (
                    <MenuItem key={category.id} onClick={handleClose}>
                        {category.category}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
