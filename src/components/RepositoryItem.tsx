import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";

interface RepositoryItemProps {
  repository: {
    name: string;
    html_url: string;
    description: string;
    clone_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <div className="flex-box">
        <strong>{props.repository.name}</strong>

        <p>{props.repository.description}</p>

        <div className="container-flex">
          <CopyToClipboard
            text={props.repository.clone_url}
            onCopy={() => console.log(alert("Copiado"))}
          >
            <button>
              <FiCopy />
            </button>
          </CopyToClipboard>
          <a href={props.repository.html_url} target="_blank">
            Acessar Repositório
          </a>
        </div>
      </div>
    </li>
  );
}
