import React, {useRef} from "react";

interface SLFProps {
    onAddItem:(item: string, qty: number) => void;
}

const ShoppingListForm = ({onAddItem}: SLFProps): JSX.Element => {
    const productInputRef = useRef<HTMLInputElement>(null);
    const qtyInputRef = useRef<HTMLInputElement>(null);
    const onSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        const newItem = productInputRef.current!.value
        const qty = parseInt(qtyInputRef.current!.value)
        onAddItem(newItem, qty);
    }

    return <form onSubmit={onSubmit}>
        <input type="text"  placeholder="Product Name" ref={productInputRef}/>
        <input type="number" min={0} ref={qtyInputRef} />
        <button type="submit">Add Item</button>
    </form>
}


export default ShoppingListForm;