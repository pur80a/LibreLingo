PYTHON_FILEPATHS = `(find . -iname "*.py" -not -path "./.venv/*")`
lint: ## Lint codebase
	poetry run pylint --rcfile=pylintrc $(PYTHON_FILEPATHS)

format: ## Run black formatter
	poetry run black --check $(PYTHON_FILEPATHS)

format-fix: ## Run black formatter with automated fix
	poetry run black $(PYTHON_FILEPATHS)

type-check: ## Run black formatter with automated fix
	poetry run mypy $(PYTHON_FILEPATHS)

pycache-delete: ## Delete the __pycache__ folders
	find . -type d -name __pycache__ -exec rm -r {} \+

clean: ## Delete cache generated
	rm -fr .mypy_cache/ .pytest_cache/ && make pycache-delete

backend-ci: ## Run python corresponding ci
	make format && make lint && make type-check

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-25s\033[0m %s\n", $$1, $$2}'
