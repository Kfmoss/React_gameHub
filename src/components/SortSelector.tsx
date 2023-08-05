import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"


interface Props{
  onSelectSortOrder: (sortOrder: string)=> void;
  sortOrder: string;
}


const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {

  
  
  const sortOrders =[
    
    {value: '', label:'Relevance'},
    {value: '-added', label:'Date added'},
    {value: 'name', label:'Name'},
    {value: '-released', label:'Release date'},
    {value: '-metametric', label:'Popularity'},
    {value: '-rating', label:'Average Rating'},
    
  ]
  
  const currentSortOrder= sortOrders.find(order => order.value===sortOrder)

  return (


    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>} >
        Order by {currentSortOrder?.label || 'Relevance'}

        <MenuList>
          {sortOrders.map(orders => <MenuItem onClick={()=>onSelectSortOrder(orders.value)} key={orders.value} value={orders.value}>{orders.label}</MenuItem>)}
        </MenuList>

    </MenuButton>
</Menu>


   
  )
}

export default SortSelector