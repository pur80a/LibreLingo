import collections

from unittest.mock import patch
from unittest import TestCase
from librelingo_json_export.challenge_types import get_short_input_challenge
from librelingo_json_export.challenge_types import get_listening_challenge
from librelingo_json_export.challenge_types import get_chips_challenge
from librelingo_json_export.challenge_types import get_options_challenge
from librelingo_json_export.challenge_types import get_chips_from_phrase
from librelingo_types import Settings, AudioSettings
from librelingo_fakes import fakes


class TestGetOptionsChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_options_challenge(fakes.word1, fakes.course1)[0]
        expected_challenge = {
            "id": "db8fd4cec19f",
            "type": "options",
            "formInTargetLanguage": "foous",
            "meaningInSourceLanguage": "foo",
            "priority": 0,
            "group": "aab69500f014",
        }
        self.assertEqual(challenge, expected_challenge)

    def test_returns_correct_value2(self):
        challenge = get_options_challenge(fakes.word2, fakes.course1)[0]
        expected_challenge = {
            "id": "e50475a646e2",
            "type": "options",
            "formInTargetLanguage": "apfel",
            "meaningInSourceLanguage": "apple",
            "priority": 0,
            "group": "9dbe235cb2d6",
        }
        self.assertEqual(challenge, expected_challenge)

    def test_returns_correct_value_with_spaces(self):
        challenge = get_options_challenge(fakes.word_with_spaces, fakes.course1)[0]
        expected_challenge = {
            "id": "98220c0c74ac",
            "type": "options",
            "formInTargetLanguage": "three word term",
            "meaningInSourceLanguage": "foo bar baz",
            "priority": 0,
            "group": "e707f76a703d",
        }
        self.assertEqual(challenge, expected_challenge)


class TestGetShortInputChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_short_input_challenge(fakes.word1, fakes.course1)[0]
        expected_challenge = {
            "id": "749e7c734898",
            "type": "shortInput",
            "pictures": ["foo.jpg", "bar.jpg", "baz.jpg"],
            "formInTargetLanguage": ["foous"],
            "phrase": [{"word": "foo", "definition": "barrus"}],
            "priority": 1,
            "group": "aab69500f014",
        }
        self.assertEqual(challenge, expected_challenge)

    def test_returns_correct_value2(self):
        challenge = get_short_input_challenge(fakes.word2, fakes.course1)[0]
        expected_challenge = {
            "id": "5f1b4778039c",
            "type": "shortInput",
            "pictures": ["1.jpg", "2.jpg", "3.jpg"],
            "formInTargetLanguage": ["apfel"],
            "phrase": [{"word": "apple", "definition": "red fruit"}],
            "priority": 1,
            "group": "9dbe235cb2d6",
        }
        self.assertEqual(challenge, expected_challenge)

    def test_returns_correct_value_with_spaces(self):
        challenge = get_short_input_challenge(fakes.word_with_spaces, fakes.course1)[0]
        expected_challenge = {
            "id": "3b0f6c9df85b",
            "type": "shortInput",
            "pictures": ["1.jpg", "2.jpg", "3.jpg"],
            "formInTargetLanguage": ["three word term"],
            "phrase": [{"word": "foo bar baz", "definition": "three word term"}],
            "priority": 1,
            "group": "e707f76a703d",
        }
        self.assertEqual(challenge, expected_challenge)


class TestListeningChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_listening_challenge(fakes.word1, fakes.course1)[0]
        expected_challenge = {
            "id": "ae89bd25c323",
            "type": "listeningExercise",
            "answer": "foous",
            "meaning": "foo",
            "priority": 1,
            "group": "aab69500f014",
            "audio": "3f981d854531e9f376ae06cb8449a6e997972d3c1b598f9a00b481ef307a469d",
        }
        self.assertEqual(challenge, expected_challenge)

    def test_returns_correct_value2(self):
        challenge = get_listening_challenge(fakes.word2, fakes.course1)[0]
        expected_challenge = {
            "id": "7de4d5b7f106",
            "type": "listeningExercise",
            "answer": "apfel",
            "meaning": "apple",
            "priority": 1,
            "group": "9dbe235cb2d6",
            "audio": "f38b5ac2a5e36c336eed306d56ed517bfd78a728321be0b87db5def8ff8abc3d",
        }
        self.assertEqual(challenge, expected_challenge)

    def test_returns_correct_value_with_spaces(self):
        challenge = get_listening_challenge(fakes.word_with_spaces, fakes.course1)[0]
        expected_challenge = {
            "id": "cfc902e834ee",
            "type": "listeningExercise",
            "answer": "three word term",
            "meaning": "foo bar baz",
            "priority": 1,
            "group": "e707f76a703d",
            "audio": "c851c784743954d87b3b49b45290318f9681f2854c0472e613d8d70daae05df7",
        }
        self.assertEqual(challenge, expected_challenge)

    def test_returns_nothing_if_audio_files_are_disabled_in_the_course(self):
        my_fake_course = fakes.customize(
            fakes.course1,
            settings=Settings(audio_settings=AudioSettings(enabled=False)),
        )
        result = get_listening_challenge(fakes.word2, my_fake_course)
        self.assertEqual(result, [])


class TestChipsChallenge(TestCase):
    def test_returns_correct_value1(self):
        challenge = get_chips_challenge(fakes.phrase1, fakes.course1)[0]
        expected_challenge = {
            "type": "chips",
            "translatesToSourceLanguage": False,
            "phrase": [
                {"word": "foo", "definition": "barrus"},
                {"word": "bar", "definition": "furrrr"},
            ],
            "id": "9f9b09771a07",
            "group": "930c4c4e7552",
            "priority": 2,
            "chips": ["foous", "barus", "lorem", "ipsum"],
            "solutions": [["foous", "barus"]],
            "formattedSolution": "foous barus",
        }
        self.assertEqual(challenge, expected_challenge)

    @patch("librelingo_json_export.challenge_types.get_solutions_from_phrase")
    @patch("librelingo_json_export.challenge_types.get_chips_from_phrase")
    def test_returns_correct_value2(
        self, get_chips_from_phrase, get_solutions_from_phrase
    ):
        get_chips_from_phrase.return_value = fakes.fake_value()
        challenge = get_chips_challenge(fakes.phrase_with_alternatives, fakes.course1)[
            0
        ]
        expected_challenge = {
            "type": "chips",
            "translatesToSourceLanguage": False,
            "phrase": [
                {"word": "foo", "definition": "barrus"},
                {"word": "bar", "definition": "furrrr"},
                {"word": "foo", "definition": "barrus"},
                {"word": "bar", "definition": "furrrr"},
            ],
            "id": "4b0e9208ce1b",
            "group": "66a39e74a2c8",
            "priority": 2,
            "solutions": get_solutions_from_phrase.return_value,
            "chips": get_chips_from_phrase.return_value,
            "formattedSolution": "foous barus foous barus ",
        }
        self.assertEqual(challenge, expected_challenge)

    def test_returns_correct_value_with_multi_word_terms(self):
        challenge = get_chips_challenge(
            fakes.phrase_with_multi_word_terms, fakes.course1
        )[0]
        expected_challenge = {
            "type": "chips",
            "translatesToSourceLanguage": False,
            "phrase": [
                {"word": "foo", "definition": "barrus"},
                {"word": "bar", "definition": "furrrr"},
                {"word": "baz quux", "definition": "very big word"},
            ],
            "id": "3e4d0ed7d738",
            "group": "e87212735da5",
            "priority": 2,
            "chips": ["foous", "barus", "very", "big", "word", "lorem", "ipsum"],
            "solutions": [["foous", "barus", "very", "big", "word"]],
            "formattedSolution": "foous barus very big word",
        }
        self.assertEqual(challenge, expected_challenge)


class GetChipsTest(TestCase):
    def test_empty_string(self):
        self.assertEqual(get_chips_from_phrase(lambda _: [""], None, fakes.course1), [])

    @patch("librelingo_json_export.challenge_types.clean_word")
    def test_empty_string_doesnt_call_clean_word(self, clean_word):
        get_chips_from_phrase(lambda _: [""], None, fakes.course1)
        self.assertFalse(clean_word.called)

    @patch("librelingo_json_export.challenge_types.clean_word")
    def test_calls_clean_word_with_correct_argument(self, clean_word):
        # pylint: disable=no-self-use
        get_chips_from_phrase(lambda _: ["foo"], None, fakes.course2)
        clean_word.assert_called_with("foo")

    @patch("librelingo_json_export.challenge_types.clean_word")
    def test_returns_correct_value(self, clean_word):
        clean_word.return_value = fakes.fake_value()
        self.assertEqual(
            get_chips_from_phrase(lambda _: "foo", None, fakes.course1),
            [clean_word.return_value],
        )

    @patch("librelingo_json_export.challenge_types.clean_word")
    def test_returns_correct_number_of_words(self, clean_word):
        # Includes extra words
        clean_word.side_effect = lambda x: x
        self.assertEqual(
            len(
                get_chips_from_phrase(
                    lambda x: ["Sleep well!"] if x is None else x[0],
                    None,
                    fakes.course1,
                )
            ),
            4,
        )

    def test_includes_words_from_other_phrases_sorted_by_edit_distance(self):
        extra_chips = list(
            get_chips_from_phrase(
                lambda x: ["something lipsum"] if x is None else x[0],
                None,
                fakes.course1,
            )
        )
        while "something" in extra_chips:
            extra_chips.remove("something")
        while "lipsum" in extra_chips:
            extra_chips.remove("lipsum")
        self.assertEqual(extra_chips, ["ipsum", "lorem"])

    def test_doesnt_include_duplicates_from_another_phrase(self):
        my_fake_module = fakes.customize(
            fakes.course1.modules[0],
            skills=[
                fakes.customize(
                    fakes.course1.modules[0].skills[0],
                    phrases=[
                        fakes.customize(
                            fakes.course1.modules[0].skills[0].phrases[0],
                            in_target_language=["Ipsum"],
                        )
                    ],
                )
            ],
        )
        fake_course_with_duplicated_chip = fakes.customize(
            fakes.course1,
            modules=[
                fakes.course1.modules[0],
                fakes.course1.modules[0],
                my_fake_module,
            ],
        )
        chips_count = collections.Counter(
            get_chips_from_phrase(
                lambda x: ["something lipsum"] if x is None else x[0],
                None,
                fake_course_with_duplicated_chip,
            )
        )

        self.assertEqual(chips_count["ipsum"] + chips_count["Ipsum"], 1)

    def test_returns_correct_number_of_words_2(self):
        fake_course_with_duplicated_chip = fakes.customize(
            fakes.course1, modules=[fakes.course1.modules[0], fakes.course1.modules[0]]
        )
        chips = list(
            get_chips_from_phrase(
                lambda x: ["something lipsum dolor"] if x is None else x[0],
                None,
                fake_course_with_duplicated_chip,
            )
        )

        self.assertEqual(len(chips), 5)
