export default function TabButton({ children, onSelect, isSelected }) {
    console.log("TAB BUTTON COMPONENT RENDERING");
    return <li>
        <button className={isSelected ? "active" : ""} onClick={onSelect}>{children}</button>
        </li>
}

