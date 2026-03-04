import VoiceItemSelector from './components/VoiceItemSelector';

const itemList = ['Design Work', 'Web Development', 'Consultation', 'SEO', 'Logo Design'];

const InvoiceForm = () => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div>
      {/* Other invoice fields */}
      
      <VoiceItemSelector
        items={itemList}
        onItemSelect={(item) => setSelectedItem(item)}
      />

      <p>🔎 Selected by Voice: <strong>{selectedItem || "None"}</strong></p>
    </div>
  );
};
