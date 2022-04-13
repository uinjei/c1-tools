export default `
    .code-window {
        background: #fff;
        box-shadow: 0 10px 40px rgb(0 0 0 / 16%);
        overflow: hidden;
        border-radius: 0.8rem;
        display: none;
    }

    .code-header {
        height: 32px;
        align-items: center;
        justify-content: center;
        border-bottom: 2px solid #f2f2f2;
        font-size: .9rem;
        color: #537bff;
        display: none;
    }

    .code-editor {
        position: relative;
        width: 100%;
        height: 55vh;
        display: none;
    }

    .number {
        font-size: 13px !important;
        padding: 0 !important;
        margin-right: 0 !important; 
        min-width: 0 !important;
        vertical-align: inherit !important;
        background-color: initial !important;
        display: inline !important;
        border-radius: initial !important;
    }

    pre {
        background-color: initial !important;
        color: #4f559c !important;
        word-wrap: normal;
    }

    .content pre {
        padding: 10px !important;
    }

    .codeflask {
        height: 55vh !important;
    }

    .notification {
        display: none;
        padding: 0.25rem 0.5rem 0.25rem 0.5rem !important;
        font-size: .9rem;
    }

    .hidden {
        display: none !important;
    }

    p {
        margin-bottom: initial !important;
    }
`;