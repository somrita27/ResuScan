import fitz
import docx
from pathlib import Path


def extract_pdf_text(file_path: str):

    text = ""

    pdf = fitz.open(file_path)

    for page in pdf:
        text += page.get_text()

    pdf.close()

    return text


def extract_docx_text(file_path: str):

    document = docx.Document(file_path)

    text = ""

    for paragraph in document.paragraphs:
        text += paragraph.text + "\n"

    return text


def extract_text(file_path: str):

    extension = Path(file_path).suffix.lower()

    if extension == ".pdf":
        return extract_pdf_text(file_path)

    elif extension == ".docx":
        return extract_docx_text(file_path)

    elif extension == ".doc":
        raise Exception(
            "DOC files are not supported yet. Please upload a DOCX or PDF."
        )

    else:
        raise Exception(
            "Unsupported file format."
        )