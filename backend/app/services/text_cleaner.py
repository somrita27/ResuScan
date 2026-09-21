import re


def clean_text(text: str):

    # Remove extra spaces
    text = re.sub(r"[ \t]+", " ", text)

    # Remove multiple blank lines
    text = re.sub(r"\n\s*\n+", "\n\n", text)

    # Remove leading/trailing whitespace
    text = text.strip()

    return text