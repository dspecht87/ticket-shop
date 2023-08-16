import EventListing from "@/EventList/EventListing";
import "./App.css";
import Header from "@/Header";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "16px", paddingTop: 38 }}>
        <Header />
        <div style={{ marginTop: 80 }}>
          <EventListing />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
