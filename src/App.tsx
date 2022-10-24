import { useState } from "react";
import Modal from "react-modal"

import { TransactionsProvider } from "./hooks/useTrasactions";

import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Hearder"
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root');

export function App () {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <TransactionsProvider>
            <GlobalStyle />

            <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
            
            <Dashboard />

           <NewTransactionModal 
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
           />
        </TransactionsProvider>
    )
}